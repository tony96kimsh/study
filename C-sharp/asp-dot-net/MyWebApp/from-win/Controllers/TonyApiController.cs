using System.Xml.Linq;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using TestApi.Models;

namespace TestApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TonyApiController : Controller
    {
        private readonly string _connectInfo =
            "Server=localhost;Database=book;Uid=root;Pwd=123456;Port=3306";

        [HttpGet("data")]
        public IActionResult GetData()
        {
            var booklist = new List<Book>();

            using (var connection = new MySqlConnection(_connectInfo))
            {
                connection.Open();

                var query = "SELECT * FROM bookstore";
                var command = new MySqlCommand(query, connection);
                var reader = command.ExecuteReader();

                while (reader.Read())
                {
                    var book = new Book
                    {
                        BookId = reader.GetInt32(reader.GetOrdinal("BookId")),
                        Title = reader.GetString(reader.GetOrdinal("title")),
                        Author = reader.GetString(reader.GetOrdinal("Author")),
                        Publisher = reader.GetString(reader.GetOrdinal("Publisher")),
                        PublisherDate = reader.GetDateTime(reader.GetOrdinal("PublisherDate")),
                        Price = reader.GetDecimal(reader.GetOrdinal("Price"))
                    };

                    booklist.Add(book);
                }
            }
            return Ok(booklist);
        }
    }
}

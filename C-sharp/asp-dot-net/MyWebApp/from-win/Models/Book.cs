namespace TestApi.Models
{
    public class Book
    {
        public int BookId { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public string Publisher { get; set; }
        public DateTime PublisherDate { get; set; }
        public int price { get; set; }
    }
}

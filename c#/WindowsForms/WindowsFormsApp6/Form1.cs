using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using static System.Windows.Forms.VisualStyles.VisualStyleElement;
/**
 * 폼기반에서 To-do 리스트 만들어보세요.

1. 텍스트 박스 1개와 버튼 1개를 배치합니다.  이 부분은 사용자가 새로운 할일을 입력하고 추가하는 기능입니다.
2. 리스트 박스 컨트롤을 추가하여 현재 할일 목록을 표시합니다.
3. 삭제 버튼을 추가하여 선택한 항목을 삭제할 수 있도록 합니다.

힌트:
- 추가 버튼 클릭 이벤트에서는 사용자가 입력한 할 일을 리스트 박스에 추가합니다.
- 삭제 버튼의 클릭 이벤트 핸들러에서는 선택한 항목을 리스트 박스에서 삭제합니다.
 */
namespace WindowsFormsApp6
{
    public partial class Form1: Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        // 추가 버튼
        private void button1_Click(object sender, EventArgs e)
        {
            string inp = textBox1.Text;
            listBox1.Items.Add(inp);
            
        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        // 삭제버튼
        private void button2_Click(object sender, EventArgs e)
        {
            listBox1.Items.Remove(listBox1.SelectedItem);
        }
    }
}


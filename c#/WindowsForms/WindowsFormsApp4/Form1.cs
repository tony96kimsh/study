using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApp4
{
    public partial class Form1: Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            int inpNum = int.Parse(textBox1.Text);
            if (inpNum >= 0)
            {
                if (inpNum <= 15 || inpNum >= 65)
                {
                    label1.Text = "할인 대상입니다";
                } 
                else
                {
                    label1.Text = "할인 대상이 아닙니다";
                }
            }
            else
            {
               label1.Text = "값을 확인해주세요";
            }
        }
    }
}

/*
 TextBox 2개와 Button 1개를 배치한다.
TextBox 1개는 나이를 입력하고, TextBox1개는 결과를 출력한다.
Button을 클릭시 할인 여부를 결과창에 표시한다.

조건) 15세 이하 65세 이상은 할인됨.
조건이 만족하면 “할인 대상입니다”라는 메시지를 결과창에 출력
조건이 불만족하면 “할인 대상이 아닙니다”라는 메시지를 결과창에 출력
 */

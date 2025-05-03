using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApp5
{
    public partial class Form1: Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            label1.Text = "";
            for (int i = 1; i <= 10; i++)
            {
                if (i % 3 == 0)
                {
                    label1.Text += "짝 ";
                } else
                {
                    label1.Text += i;
                    label1.Text += " ";
                }
            }
        }
    }
}

//------------------------------------------------------------------------------
// <auto-generated>
//    此代码是根据模板生成的。
//
//    手动更改此文件可能会导致应用程序中发生异常行为。
//    如果重新生成代码，则将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

namespace Model
{
    using System;
    using System.Collections.Generic;
    
    public partial class ROADBED_KEYDISEASE_REPORT
    {
        public string REPORT_ID { get; set; }
        public string GWD_CODE { get; set; }
        public string CJ_CODE { get; set; }
        public string GQ_CODE { get; set; }
        public string LINE_CODE { get; set; }
        public string LINE_CAT { get; set; }
        public string LINE_DIR { get; set; }
        public string SIDE { get; set; }
        public string SECTION_STATION { get; set; }
        public Nullable<decimal> START_MILE { get; set; }
        public Nullable<decimal> END_MILE { get; set; }
        public Nullable<decimal> LEN { get; set; }
        public string REPORT_DATE { get; set; }
        public int EQU_TOTAL { get; set; }
        public int EQU_SCORE { get; set; }
        public int EQU_FINE { get; set; }
        public int EQU_PASS { get; set; }
        public int EQU_DISPASS { get; set; }
        public int NOTICE_NUM { get; set; }
        public string MEMO { get; set; }
    }
}

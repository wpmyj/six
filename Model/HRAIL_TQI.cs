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
    
    public partial class HRAIL_TQI
    {
        public string TQI_ID { get; set; }
        public string GWD_CODE { get; set; }
        public string CJ_CODE { get; set; }
        public string GQ_CODE { get; set; }
        public string LINE_CODE { get; set; }
        public string LINE_DIR { get; set; }
        public string LINE_CAT { get; set; }
        public decimal TQI_MILE { get; set; }
        public string OVERRUN { get; set; }
        public Nullable<decimal> TRACK_LEFT { get; set; }
        public Nullable<decimal> TRACK_RIGHT { get; set; }
        public Nullable<decimal> HEGHT_LEFT { get; set; }
        public Nullable<decimal> HEGHT_RIGHT { get; set; }
        public Nullable<decimal> TRACK_CROSSLEVEL { get; set; }
        public Nullable<decimal> RAIL_GAUGE { get; set; }
        public Nullable<decimal> TWIST { get; set; }
        public decimal TQI_VAL { get; set; }
        public string TQI_OVER { get; set; }
        public Nullable<short> SPEED { get; set; }
        public decimal SPEED2 { get; set; }
        public string SPEED_SPAN { get; set; }
        public System.DateTime CHECK_DATE { get; set; }
        public string JOB_PLAN_ID { get; set; }
        public Nullable<System.DateTime> REPAIR_DATE { get; set; }
        public string REPAIR_MAN { get; set; }
        public string REPAIR_RES { get; set; }
        public string MEMO { get; set; }
        public Nullable<System.DateTime> CRT_TM { get; set; }
        public string CRT_NAME { get; set; }
    }
}

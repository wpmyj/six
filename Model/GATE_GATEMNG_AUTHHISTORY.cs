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
    
    public partial class GATE_GATEMNG_AUTHHISTORY
    {
        public string HISTORY_ID { get; set; }
        public string GATE_NO { get; set; }
        public string CARD_NO { get; set; }
        public string TIMEENABLE_FLAG { get; set; }
        public Nullable<System.DateTime> TIME_BEGIN { get; set; }
        public Nullable<System.DateTime> TIME_END { get; set; }
        public string HISTORY_LOG { get; set; }
        public string AUTHOPT_SECTION { get; set; }
        public Nullable<System.DateTime> HIS_TIME { get; set; }
        public string AUTH_OPT { get; set; }
    }
}
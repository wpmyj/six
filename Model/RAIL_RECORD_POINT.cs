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
    
    public partial class RAIL_RECORD_POINT
    {
        public string POINTRECORD_ID { get; set; }
        public string HOST_NO { get; set; }
        public Nullable<System.DateTime> RECORD_TIME { get; set; }
        public Nullable<decimal> RECORD_ORDER { get; set; }
        public string POINT_POWER { get; set; }
        public string POINTRECORD_LOG { get; set; }
        public string STANDARD_POWER { get; set; }
        public string POINT_NO { get; set; }
        public string STATUS_FLAG { get; set; }
        public string WARN_FLAG { get; set; }
    }
}

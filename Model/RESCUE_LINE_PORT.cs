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
    
    public partial class RESCUE_LINE_PORT
    {
        public string PORT_ID { get; set; }
        public string RESCUE_ID { get; set; }
        public string RESCUE_NOTE { get; set; }
        public Nullable<decimal> MARS_LONGITUDE { get; set; }
        public Nullable<decimal> MARS_LATITUDE { get; set; }
        public string ICON { get; set; }
        public Nullable<System.DateTime> UPDATETIME { get; set; }
        public string PORT_NAME { get; set; }
        public string PORT_MILEAGE { get; set; }
        public Nullable<int> PORT_SORT { get; set; }
        public string CJNAME { get; set; }
        public string GQNAME { get; set; }
        public string LINESIDE { get; set; }
        public string RAIL_MILEAGE { get; set; }
        public string MAIN_STATION { get; set; }
    
        public virtual RESCUE_LINE RESCUE_LINE { get; set; }
    }
}

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
    
    public partial class RAIN_FLOOD_STOCK
    {
        public RAIN_FLOOD_STOCK()
        {
            this.RAIN_FLOOD_STOCK_PHOTO = new HashSet<RAIN_FLOOD_STOCK_PHOTO>();
        }
    
        public string FLOODSTOCK_ID { get; set; }
        public string STATION_CODE { get; set; }
        public string STATION_NAME { get; set; }
        public Nullable<decimal> MARSLONGITUDE { get; set; }
        public Nullable<decimal> MARSLATITUDE { get; set; }
        public string LOCATION_TRACK { get; set; }
        public string STOCK_TYPE { get; set; }
        public string STOCK_NAME { get; set; }
        public Nullable<short> STOCK_NUM { get; set; }
        public string CAR_NUM { get; set; }
        public Nullable<System.DateTime> ARRIVE_DATE { get; set; }
        public string USE_SITUATION { get; set; }
        public Nullable<System.DateTime> RELIEVE_DATE { get; set; }
        public string DEMO { get; set; }
    
        public virtual ICollection<RAIN_FLOOD_STOCK_PHOTO> RAIN_FLOOD_STOCK_PHOTO { get; set; }
    }
}
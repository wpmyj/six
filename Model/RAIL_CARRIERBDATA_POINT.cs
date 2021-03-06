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
    
    public partial class RAIL_CARRIERBDATA_POINT
    {
        public RAIL_CARRIERBDATA_POINT()
        {
            this.RAIL_CARRIERDEVICE_STATUS = new HashSet<RAIL_CARRIERDEVICE_STATUS>();
            this.RAIL_CARRIERDEVICE_WARN = new HashSet<RAIL_CARRIERDEVICE_WARN>();
            this.RAIL_SECTION_LINE = new HashSet<RAIL_SECTION_LINE>();
        }
    
        public string POINT_NO { get; set; }
        public string POINT_NAME { get; set; }
        public string LINE_CODE { get; set; }
        public string LINE_NAME { get; set; }
        public string LINE_DIR { get; set; }
        public Nullable<decimal> MILEAGE_COORDINATE { get; set; }
        public string MONITOR_SECTION_NAME { get; set; }
        public Nullable<decimal> MONITORMILE_BEGIN { get; set; }
        public Nullable<decimal> MONITORMILE_END { get; set; }
        public Nullable<decimal> LONGITUDE { get; set; }
        public Nullable<decimal> LATITUDE { get; set; }
        public Nullable<decimal> MARSLONGITUDE { get; set; }
        public Nullable<decimal> MARSLATITUDE { get; set; }
        public Nullable<decimal> BAIDULONGITUDE { get; set; }
        public Nullable<decimal> BAIDULATITUDE { get; set; }
        public string DEPT_CODE { get; set; }
        public Nullable<decimal> POINT_ORDER { get; set; }
        public string POINT_FLAG { get; set; }
        public string POINT_NOTE { get; set; }
        public string POINT_PHONENO { get; set; }
        public string MONITOR_SECTION_RANGE { get; set; }
        public string TYPE { get; set; }
        public string POSITION { get; set; }
        public string SECTION_ID { get; set; }
    
        public virtual RAIL_CARRIERBDATA_SECTION RAIL_CARRIERBDATA_SECTION { get; set; }
        public virtual SYS_DEPT SYS_DEPT { get; set; }
        public virtual ICollection<RAIL_CARRIERDEVICE_STATUS> RAIL_CARRIERDEVICE_STATUS { get; set; }
        public virtual ICollection<RAIL_CARRIERDEVICE_WARN> RAIL_CARRIERDEVICE_WARN { get; set; }
        public virtual ICollection<RAIL_SECTION_LINE> RAIL_SECTION_LINE { get; set; }
    }
}

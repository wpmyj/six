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
    
    public partial class BROKENRAIL_BDATA_DEVICE
    {
        public BROKENRAIL_BDATA_DEVICE()
        {
            this.BROKENRAIL_DEVICE_STATUS = new HashSet<BROKENRAIL_DEVICE_STATUS>();
            this.BROKENRAIL_DEVICE_STATUSHIS = new HashSet<BROKENRAIL_DEVICE_STATUSHIS>();
            this.BROKENRAIL_SECTION_LINE = new HashSet<BROKENRAIL_SECTION_LINE>();
            this.BROKENRAIL_VOLTAGE_STATUS = new HashSet<BROKENRAIL_VOLTAGE_STATUS>();
            this.BROKENRAIL_VOLTAGE_STATUSHIS = new HashSet<BROKENRAIL_VOLTAGE_STATUSHIS>();
        }
    
        public string POINT_NO { get; set; }
        public string POINT_NAME { get; set; }
        public string LINE_CODE { get; set; }
        public string LINE_NAME { get; set; }
        public string LINE_DIR { get; set; }
        public Nullable<decimal> MILEAGE_COORDINATE { get; set; }
        public Nullable<decimal> LONGITUDE { get; set; }
        public Nullable<decimal> LATITUDE { get; set; }
        public Nullable<decimal> MARSLONGITUDE { get; set; }
        public Nullable<decimal> MARSLATITUDE { get; set; }
        public Nullable<decimal> BAIDULONGITUDE { get; set; }
        public Nullable<decimal> BAIDULATITUDE { get; set; }
        public Nullable<decimal> POINT_ORDER { get; set; }
        public string POINT_FLAG { get; set; }
        public string POINT_NOTE { get; set; }
        public string POINT_PHONENO { get; set; }
        public string TYPE { get; set; }
        public string POSITION { get; set; }
        public string SECTION_ID { get; set; }
        public string DEVICE_MODE { get; set; }
        public string MATCHUP_PHONE { get; set; }
        public string PREV_PHONE { get; set; }
        public string NEXT_PHONE { get; set; }
        public string PREV_SCALER_MILEAGE { get; set; }
        public string NEXT_SCALER_MILEAGE { get; set; }
        public string IS_END { get; set; }
        public string LEFT_FREQUENCY { get; set; }
        public string RIGHT_FREQUENCY { get; set; }
        public string VOLTAGE { get; set; }
    
        public virtual BROKENRAIL_BDATA_SECTION BROKENRAIL_BDATA_SECTION { get; set; }
        public virtual ICollection<BROKENRAIL_DEVICE_STATUS> BROKENRAIL_DEVICE_STATUS { get; set; }
        public virtual ICollection<BROKENRAIL_DEVICE_STATUSHIS> BROKENRAIL_DEVICE_STATUSHIS { get; set; }
        public virtual ICollection<BROKENRAIL_SECTION_LINE> BROKENRAIL_SECTION_LINE { get; set; }
        public virtual ICollection<BROKENRAIL_VOLTAGE_STATUS> BROKENRAIL_VOLTAGE_STATUS { get; set; }
        public virtual ICollection<BROKENRAIL_VOLTAGE_STATUSHIS> BROKENRAIL_VOLTAGE_STATUSHIS { get; set; }
    }
}

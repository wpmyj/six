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
    
    public partial class FIVET_INFO
    {
        public FIVET_INFO()
        {
            this.FIVET_INFO_PHOTO = new HashSet<FIVET_INFO_PHOTO>();
            this.FIVET_INFO_FILE = new HashSet<FIVET_INFO_FILE>();
            this.FIVET_INFO_VIDEO = new HashSet<FIVET_INFO_VIDEO>();
        }
    
        public string PKID { get; set; }
        public string SERIAL_NUMBER { get; set; }
        public string DEPT_NAME { get; set; }
        public string LINE_NAME { get; set; }
        public string PROBE_STATION { get; set; }
        public Nullable<decimal> MILES_MARK { get; set; }
        public string PROBE_DIRECTION { get; set; }
        public string EQUIPMENT_HOME { get; set; }
        public string EQUIPMENT_TYPE { get; set; }
        public string INSTALL_DATE { get; set; }
        public string EQUIPMENT_OTHER { get; set; }
        public string CHARGE_PERSON { get; set; }
        public string STATION_NAME { get; set; }
        public string ACTUAL_NAME { get; set; }
        public string EQUIPMENT_NUMBER { get; set; }
        public string DETECTION_POINT { get; set; }
        public string NOTES { get; set; }
        public string FIVET_TYPE_ID { get; set; }
        public string DEPT_CODE { get; set; }
        public Nullable<decimal> MARSLONGITUDE { get; set; }
        public Nullable<decimal> MARSLATITUDE { get; set; }
    
        public virtual ICollection<FIVET_INFO_PHOTO> FIVET_INFO_PHOTO { get; set; }
        public virtual ICollection<FIVET_INFO_FILE> FIVET_INFO_FILE { get; set; }
        public virtual FIVET_INFO_TYPE FIVET_INFO_TYPE { get; set; }
        public virtual ICollection<FIVET_INFO_VIDEO> FIVET_INFO_VIDEO { get; set; }
    }
}

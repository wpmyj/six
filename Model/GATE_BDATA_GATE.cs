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
    
    public partial class GATE_BDATA_GATE
    {
        public GATE_BDATA_GATE()
        {
            this.GATE_GATEMNG_LONGDISHISTORY = new HashSet<GATE_GATEMNG_LONGDISHISTORY>();
        }
    
        public string GATE_NO { get; set; }
        public string GATE_NAME { get; set; }
        public Nullable<decimal> LONGITUDE { get; set; }
        public Nullable<decimal> LATITUDE { get; set; }
        public Nullable<decimal> MARSLONGITUDE { get; set; }
        public Nullable<decimal> MARSLATITUDE { get; set; }
        public Nullable<decimal> BAIDULONGITUDE { get; set; }
        public Nullable<decimal> BAIDULATITUDE { get; set; }
        public string DEPT_CODE { get; set; }
        public string CLIENT_NO { get; set; }
        public string LINE_CODE { get; set; }
        public string LINE_NAME { get; set; }
        public string LINE_DIR { get; set; }
        public Nullable<decimal> MILEAGE_COORDINATE { get; set; }
        public string GATE_CONVERTNO { get; set; }
        public Nullable<short> GATE_TYPE { get; set; }
        public string GATE_ID { get; set; }
    
        public virtual GATE_BDATA_CLIENT GATE_BDATA_CLIENT { get; set; }
        public virtual ICollection<GATE_GATEMNG_LONGDISHISTORY> GATE_GATEMNG_LONGDISHISTORY { get; set; }
        public virtual SYS_DEPT SYS_DEPT { get; set; }
        public virtual GATE_GATEMNG_LASTSTATE GATE_GATEMNG_LASTSTATE { get; set; }
    }
}

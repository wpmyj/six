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
    
    public partial class EMERGENCY_RESCUE
    {
        public EMERGENCY_RESCUE()
        {
            this.EMERGENCY_TALENT_POOL = new HashSet<EMERGENCY_TALENT_POOL>();
            this.EMERGENCY_RESCUE_TOOL = new HashSet<EMERGENCY_RESCUE_TOOL>();
        }
    
        public string PKID { get; set; }
        public string DEPT_CODE { get; set; }
        public string DEPT_NAME { get; set; }
        public string PERSON_NUM { get; set; }
        public string MANAGE { get; set; }
        public string JOB { get; set; }
        public string PHONE { get; set; }
        public string TRANSPORT { get; set; }
        public string SECTION { get; set; }
        public string NOTES { get; set; }
        public string LINE_NAME { get; set; }
        public string LINE_DIR { get; set; }
        public Nullable<decimal> MILEAGE_CENTER { get; set; }
        public Nullable<decimal> MARSLONGITUDE { get; set; }
        public Nullable<decimal> MARSLATITUDE { get; set; }
        public string RESCUE_NAME { get; set; }
    
        public virtual ICollection<EMERGENCY_TALENT_POOL> EMERGENCY_TALENT_POOL { get; set; }
        public virtual ICollection<EMERGENCY_RESCUE_TOOL> EMERGENCY_RESCUE_TOOL { get; set; }
    }
}

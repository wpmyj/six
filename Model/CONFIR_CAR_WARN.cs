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
    
    public partial class CONFIR_CAR_WARN
    {
        public string PKID { get; set; }
        public string CARPLAN_PKID { get; set; }
        public string WARN_CONTENT { get; set; }
        public Nullable<System.DateTime> WARN_TIME { get; set; }
        public string WARN_TYPE { get; set; }
        public string WARN_STATE { get; set; }
        public string RELEASE_USER { get; set; }
        public Nullable<System.DateTime> RELEASE_TIME { get; set; }
        public string DEPT_CODE { get; set; }
        public string RELEASE_NOTE { get; set; }
    
        public virtual CONFIR_CAR_PLAN CONFIR_CAR_PLAN { get; set; }
    }
}

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
    
    public partial class JOB_PLAN_EQUIPMENT
    {
        public JOB_PLAN_EQUIPMENT()
        {
            this.JOB_PLAN_LINE_EQUIANDTIM = new HashSet<JOB_PLAN_LINE_EQUIANDTIM>();
        }
    
        public string PLAN_ID { get; set; }
        public string PLAN_NAME { get; set; }
        public string DEPT_CODE { get; set; }
        public string DEPT_NAME { get; set; }
        public string LINE_NAME { get; set; }
        public string LINE_DIR { get; set; }
        public Nullable<decimal> MILEAGE_BEGIN { get; set; }
        public Nullable<decimal> MILEAGE_END { get; set; }
        public Nullable<System.DateTime> PLANTIME_BEGIN { get; set; }
        public Nullable<System.DateTime> PLANTIME_END { get; set; }
        public string LEADER_HOME { get; set; }
        public string PHONE { get; set; }
        public Nullable<decimal> MARS_LONGITUDE { get; set; }
        public Nullable<decimal> MARS_LATITUDE { get; set; }
        public string PLAN_CONTENT { get; set; }
        public string NOTES { get; set; }
    
        public virtual ICollection<JOB_PLAN_LINE_EQUIANDTIM> JOB_PLAN_LINE_EQUIANDTIM { get; set; }
    }
}

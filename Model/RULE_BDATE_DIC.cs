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
    
    public partial class RULE_BDATE_DIC
    {
        public RULE_BDATE_DIC()
        {
            this.RULE_PARA_SCORE = new HashSet<RULE_PARA_SCORE>();
            this.RULE_PROBLEM_PUBLISH_CONFIGER = new HashSet<RULE_PROBLEM_PUBLISH_CONFIGER>();
            this.RULE_PROBLEM_PUBLISH_CONFIGER1 = new HashSet<RULE_PROBLEM_PUBLISH_CONFIGER>();
            this.RULE_PROBLEM = new HashSet<RULE_PROBLEM>();
            this.RULE_PROBLEM1 = new HashSet<RULE_PROBLEM>();
            this.RULE_PROBLEM2 = new HashSet<RULE_PROBLEM>();
            this.RULE_PROBLEM3 = new HashSet<RULE_PROBLEM>();
        }
    
        public string ID { get; set; }
        public string CATEGORY_ID { get; set; }
        public string CATEGORY_NAME { get; set; }
        public string NAME { get; set; }
        public string NOTE { get; set; }
        public Nullable<decimal> DICORDER { get; set; }
    
        public virtual ICollection<RULE_PARA_SCORE> RULE_PARA_SCORE { get; set; }
        public virtual ICollection<RULE_PROBLEM_PUBLISH_CONFIGER> RULE_PROBLEM_PUBLISH_CONFIGER { get; set; }
        public virtual ICollection<RULE_PROBLEM_PUBLISH_CONFIGER> RULE_PROBLEM_PUBLISH_CONFIGER1 { get; set; }
        public virtual ICollection<RULE_PROBLEM> RULE_PROBLEM { get; set; }
        public virtual ICollection<RULE_PROBLEM> RULE_PROBLEM1 { get; set; }
        public virtual ICollection<RULE_PROBLEM> RULE_PROBLEM2 { get; set; }
        public virtual ICollection<RULE_PROBLEM> RULE_PROBLEM3 { get; set; }
    }
}

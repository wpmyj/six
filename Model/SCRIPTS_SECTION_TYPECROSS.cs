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
    
    public partial class SCRIPTS_SECTION_TYPECROSS
    {
        public SCRIPTS_SECTION_TYPECROSS()
        {
            this.SCRIPTS_SECTION_LINE = new HashSet<SCRIPTS_SECTION_LINE>();
        }
    
        public string TYPECROSS_ID { get; set; }
        public string TYPECROSS_NAME { get; set; }
        public string ICON { get; set; }
        public string DEPT_CODE { get; set; }
        public string DEPT_NAME { get; set; }
        public string TYPECROSS_TYPE { get; set; }
        public string LINE_NAME { get; set; }
        public string LINE_DIR { get; set; }
        public Nullable<decimal> MILEAGE { get; set; }
        public Nullable<decimal> WIDTH { get; set; }
        public Nullable<decimal> MARSLONGITUDE { get; set; }
        public Nullable<decimal> MARSLATITUDE { get; set; }
        public string TYPECROSS_NOTE { get; set; }
    
        public virtual ICollection<SCRIPTS_SECTION_LINE> SCRIPTS_SECTION_LINE { get; set; }
    }
}

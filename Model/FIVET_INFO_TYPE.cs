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
    
    public partial class FIVET_INFO_TYPE
    {
        public FIVET_INFO_TYPE()
        {
            this.FIVET_INFO = new HashSet<FIVET_INFO>();
        }
    
        public string TYPE_ID { get; set; }
        public string TYPE_NAME { get; set; }
        public string FIVET_ICON { get; set; }
        public string DEPT_CODE { get; set; }
        public string DEPT_NAME { get; set; }
    
        public virtual ICollection<FIVET_INFO> FIVET_INFO { get; set; }
    }
}

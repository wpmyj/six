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
    
    public partial class SYS_ROLE_MENUOPT_MAP
    {
        public string ROLE_ID { get; set; }
        public string MENUOPT_ID { get; set; }
        public string ROLE_MENUOPT_ID { get; set; }
    
        public virtual SYS_MENUOPT SYS_MENUOPT { get; set; }
        public virtual SYS_ROLE SYS_ROLE { get; set; }
    }
}

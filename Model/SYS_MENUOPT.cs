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
    
    public partial class SYS_MENUOPT
    {
        public SYS_MENUOPT()
        {
            this.SYS_ROLE_MENUOPT_MAP = new HashSet<SYS_ROLE_MENUOPT_MAP>();
        }
    
        public string MENUOPT_ID { get; set; }
        public string MENUOPT_NAME { get; set; }
        public string MENU_ID { get; set; }
        public string C_ICO { get; set; }
        public string AREA { get; set; }
        public string CONTROLLER { get; set; }
        public string ACTION { get; set; }
        public string NOTE { get; set; }
    
        public virtual SYS_MENU SYS_MENU { get; set; }
        public virtual ICollection<SYS_ROLE_MENUOPT_MAP> SYS_ROLE_MENUOPT_MAP { get; set; }
    }
}

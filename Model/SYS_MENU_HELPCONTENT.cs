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
    
    public partial class SYS_MENU_HELPCONTENT
    {
        public string CONTENT_ID { get; set; }
        public string MENU_ID { get; set; }
        public string HELP_CONTENT { get; set; }
        public string CONTENT_ORDER { get; set; }
        public Nullable<System.DateTime> UPDATE_DATE { get; set; }
        public string UPDATE_USER { get; set; }
    
        public virtual SYS_MENU SYS_MENU { get; set; }
    }
}

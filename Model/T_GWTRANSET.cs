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
    
    public partial class T_GWTRANSET
    {
        public string 监测点 { get; set; }
        public string 线名 { get; set; }
        public string 转发单位 { get; set; }
        public string 手机号 { get; set; }
        public Nullable<decimal> 高温 { get; set; }
        public Nullable<decimal> 低温 { get; set; }
        public Nullable<decimal> 起始小时 { get; set; }
        public Nullable<decimal> 终止小时 { get; set; }
        public string 转发 { get; set; }
        public string PKID { get; set; }
    
        public virtual SYS_DEPT SYS_DEPT { get; set; }
    }
}
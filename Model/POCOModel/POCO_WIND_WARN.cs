//------------------------------------------------------------------------------
// <auto-generated>
//    此代码是根据模板生成的。
//
//    手动更改此文件可能会导致应用程序中发生异常行为。
//    如果重新生成代码，则将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

namespace Model.POCOModel
{
      
    using System;
    using System.Collections.Generic;
    
    public partial class POCO_WIND_WARN
    {
        public string PKID { get; set; }
        public string 手机号 { get; set; }
        public Nullable<System.DateTime> 时间 { get; set; }
        public Nullable<decimal> 报警ID { get; set; }
        public Nullable<decimal> 风速 { get; set; }
        public Nullable<decimal> 风向度 { get; set; }
        public string 风向 { get; set; }
        public Nullable<decimal> 风力等级 { get; set; }
        public Nullable<decimal> 瞬风 { get; set; }
        public Nullable<decimal> 瞬风等级 { get; set; }
    }
}

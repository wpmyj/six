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
    
    public partial class RESCUE_LINE_INFO
    {
        public string PKID { get; set; }
        public Nullable<decimal> 经度 { get; set; }
        public Nullable<decimal> 纬度 { get; set; }
        public Nullable<decimal> 火星经度 { get; set; }
        public Nullable<decimal> 火星纬度 { get; set; }
        public Nullable<decimal> 百度经度 { get; set; }
        public Nullable<decimal> 百度纬度 { get; set; }
        public string RESCUE_ID { get; set; }
        public Nullable<decimal> MILEAGE { get; set; }
    
        public virtual RESCUE_LINE RESCUE_LINE { get; set; }
    }
}

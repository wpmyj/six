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
    
    public partial class CURVE_CWR
    {
        public string PKID { get; set; }
        public Nullable<System.DateTime> LAYINGDATE { get; set; }
        public string STRUCTUREFORM { get; set; }
        public Nullable<decimal> DLOCKTEMPERATURE { get; set; }
        public Nullable<decimal> ALOCKTEMPERATURE { get; set; }
        public Nullable<decimal> SSADLOCKTEMPERATURE { get; set; }
        public Nullable<decimal> SSAALOCKTEMPERATURE { get; set; }
        public Nullable<System.DateTime> SSABLEEDINGDATE { get; set; }
        public Nullable<decimal> AWSDLOCKTEMPERATURE { get; set; }
        public Nullable<decimal> AWSALOCKTEMPERATURE { get; set; }
        public Nullable<System.DateTime> AWSBLEEDINGDATE { get; set; }
        public Nullable<System.DateTime> T_CRT_TM { get; set; }
        public string C_CRT_NAME { get; set; }
        public Nullable<decimal> N_ORDER { get; set; }
        public string C_MEMO { get; set; }
    }
}

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
    
    public partial class T_LKJ_WORKPROCESS
    {
        public decimal ID { get; set; }
        public decimal FLOWID { get; set; }
        public decimal WORKID { get; set; }
        public string WORKNAME { get; set; }
        public decimal STEPID { get; set; }
        public string DEPTID { get; set; }
        public string DEPTNAME { get; set; }
        public string USERID { get; set; }
        public string USERNAME { get; set; }
        public Nullable<System.DateTime> WORKTIME { get; set; }
        public string NEXTDEPTID { get; set; }
        public string NEXTUSERID { get; set; }
        public decimal ACTIONSTATUS { get; set; }
        public decimal WORKSTATUS { get; set; }
        public string REMARK { get; set; }
        public string BACKDESC { get; set; }
        public Nullable<decimal> DATASTATUS { get; set; }
        public Nullable<decimal> TASKID { get; set; }
        public Nullable<decimal> DOCID { get; set; }
        public Nullable<decimal> DOCFLAG { get; set; }
        public string DOCFILENAME { get; set; }
        public Nullable<decimal> PRESTEPID { get; set; }
        public string PREDEPTID { get; set; }
        public string PREUSERID { get; set; }
        public string MARKID { get; set; }
    }
}

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
    
    public partial class POCO_BROKENRAIL_WARN_CONTROL
    {
        public string PKID { get; set; }
        public string DEPT_CODE { get; set; }
        public string LINE_NAME { get; set; }
        public string SECTION_ID { get; set; }
        public string WARN_STATE { get; set; }
        public Nullable<System.DateTime> START_TIME { get; set; }
        public Nullable<System.DateTime> END_TIME { get; set; }
        public string OP_NAME { get; set; }
        public Nullable<System.DateTime> OP_TIME { get; set; }
        public string USER_NAME { get; set; }
        public string COMMENTS { get; set; }
        public string FLAG { get; set; }
        public string REASON { get; set; }
        public Nullable<decimal> MILE_START { get; set; }
        public Nullable<decimal> MILE_END { get; set; }
        public string LINE_DIR { get; set; }
    }
}

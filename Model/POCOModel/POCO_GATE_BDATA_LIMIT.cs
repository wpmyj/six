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
    
    public partial class POCO_GATE_BDATA_LIMIT
    {
        public string LIMIT_ID { get; set; }
        public string DEPT_CODE { get; set; }
        public string LINE_NAME { get; set; }
        public string LINE_DIR { get; set; }
        public Nullable<decimal> MILEAGE_BEGIN { get; set; }
        public Nullable<decimal> MILEAGE_END { get; set; }
        public Nullable<short> LINE_NUM { get; set; }
        public Nullable<decimal> LIMIT_LENGTH { get; set; }
        public Nullable<System.DateTime> CREATE_TIME { get; set; }
        public string LIMIT_NOTE { get; set; }
    }
}

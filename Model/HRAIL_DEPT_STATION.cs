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
    
    public partial class HRAIL_DEPT_STATION
    {
        public string DEPTSTATION_ID { get; set; }
        public string DEPT_CODE { get; set; }
        public string STATION_CODE { get; set; }
        public short FLAG { get; set; }
    
        public virtual SYS_DEPT SYS_DEPT { get; set; }
    }
}

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
    
    public partial class ASSET_MRP_BOM
    {
        public string MRP_ID { get; set; }
        public string BOM_ID { get; set; }
        public string MATERIAL_CODE { get; set; }
        public string MATERIAL_NAME { get; set; }
        public string MATERIAL_TYPE { get; set; }
        public string MATERIAL_STATUS { get; set; }
        public int MRP_QUANTITY { get; set; }
        public int APPROVED_QUANTITY { get; set; }
        public int PURCHASE_QUANTITY { get; set; }
        public string PURCHASE_UNIT { get; set; }
        public Nullable<decimal> PURCHASE_PRICE { get; set; }
        public Nullable<decimal> AMOUNT { get; set; }
        public string WAREHOUSE_CODE { get; set; }
    }
}

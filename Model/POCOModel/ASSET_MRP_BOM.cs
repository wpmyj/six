//------------------------------------------------------------------------------
// <auto-generated>
//    此代码是根据模板生成的。
//
//    手动更改此文件可能会导致应用程序中发生异常行为。
//    如果重新生成代码，则将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;

namespace Model
{
	public partial class ASSET_MRP_BOM
	{
		public ASSET_MRP_BOM ToPOCO(bool isPOCO = true){
			return new ASSET_MRP_BOM(){
				MRP_ID = this.MRP_ID,
				BOM_ID = this.BOM_ID,
				MATERIAL_CODE = this.MATERIAL_CODE,
				MATERIAL_NAME = this.MATERIAL_NAME,
				MATERIAL_TYPE = this.MATERIAL_TYPE,
				MATERIAL_STATUS = this.MATERIAL_STATUS,
				MRP_QUANTITY = this.MRP_QUANTITY,
				APPROVED_QUANTITY = this.APPROVED_QUANTITY,
				PURCHASE_QUANTITY = this.PURCHASE_QUANTITY,
				PURCHASE_UNIT = this.PURCHASE_UNIT,
				PURCHASE_PRICE = this.PURCHASE_PRICE,
				AMOUNT = this.AMOUNT,
				WAREHOUSE_CODE = this.WAREHOUSE_CODE,
			};
		}
	} 
}

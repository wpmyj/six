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
	public partial class ASSET_INVENTORY
	{
		public ASSET_INVENTORY ToPOCO(bool isPOCO = true){
			return new ASSET_INVENTORY(){
				INVENTORY_ID = this.INVENTORY_ID,
				WAREHOUSE_CODE = this.WAREHOUSE_CODE,
				MATERIAL_CODE = this.MATERIAL_CODE,
				MATERIAL_TYPE = this.MATERIAL_TYPE,
				UNIT = this.UNIT,
			};
		}
	} 
}
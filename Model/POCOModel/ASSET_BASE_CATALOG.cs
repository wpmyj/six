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
	public partial class ASSET_BASE_CATALOG
	{
		public ASSET_BASE_CATALOG ToPOCO(bool isPOCO = true){
			return new ASSET_BASE_CATALOG(){
				CATALOG_CODE = this.CATALOG_CODE,
				CATALOG_NAME = this.CATALOG_NAME,
				PARENT_CODE = this.PARENT_CODE,
				EFF_FLAG = this.EFF_FLAG,
				IS_TOOL = this.IS_TOOL,
				MEMO = this.MEMO,
			};
		}
	} 
}

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
	public partial class HRAIL_PLAN_MATERIAL
	{
		public HRAIL_PLAN_MATERIAL ToPOCO(bool isPOCO = true){
			return new HRAIL_PLAN_MATERIAL(){
				FLOWID = this.FLOWID,
				PLAN_ID = this.PLAN_ID,
				PLAN_MATERIAL_ID = this.PLAN_MATERIAL_ID,
				MATERIAL_ID = this.MATERIAL_ID,
				QUANTITY = this.QUANTITY,
				ACTUAL_QUANTITY = this.ACTUAL_QUANTITY,
				FLAG = this.FLAG,
			};
		}
	} 
}

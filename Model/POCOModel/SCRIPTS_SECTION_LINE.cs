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
	public partial class SCRIPTS_SECTION_LINE
	{
		public SCRIPTS_SECTION_LINE ToPOCO(bool isPOCO = true){
			return new SCRIPTS_SECTION_LINE(){
				PKID = this.PKID,
				经度 = this.经度,
				纬度 = this.纬度,
				火星经度 = this.火星经度,
				火星纬度 = this.火星纬度,
				百度经度 = this.百度经度,
				百度纬度 = this.百度纬度,
				TYPEINFO_ID = this.TYPEINFO_ID,
				TYPEFLOOD_ID = this.TYPEFLOOD_ID,
				TYPECROSS_ID = this.TYPECROSS_ID,
				MILEAGE = this.MILEAGE,
			};
		}
	} 
}

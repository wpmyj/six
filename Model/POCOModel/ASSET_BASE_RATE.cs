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
	public partial class ASSET_BASE_RATE
	{
		public ASSET_BASE_RATE ToPOCO(bool isPOCO = true){
			return new ASSET_BASE_RATE(){
				RATE_ID = this.RATE_ID,
				RATE_NAME = this.RATE_NAME,
				RATE = this.RATE,
			};
		}
	} 
}

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
	public partial class PHONEDIC
	{
		public PHONEDIC ToPOCO(bool isPOCO = true){
			return new PHONEDIC(){
				手机号 = this.手机号,
				是否外地 = this.是否外地,
			};
		}
	} 
}
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
	public partial class WIND_YEARRPT
	{
		public WIND_YEARRPT ToPOCO(bool isPOCO = true){
			return new WIND_YEARRPT(){
				手机号 = this.手机号,
				最大风速 = this.最大风速,
				最大风速风向 = this.最大风速风向,
				Y1 = this.Y1,
				Y2 = this.Y2,
				Y3 = this.Y3,
				Y4 = this.Y4,
				Y5 = this.Y5,
				Y6 = this.Y6,
				Y7 = this.Y7,
				Y8 = this.Y8,
				Y9 = this.Y9,
				Y10 = this.Y10,
				Y11 = this.Y11,
				Y12 = this.Y12,
			};
		}
	} 
}
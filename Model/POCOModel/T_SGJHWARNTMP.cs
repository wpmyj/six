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
	public partial class T_SGJHWARNTMP
	{
		public T_SGJHWARNTMP ToPOCO(bool isPOCO = true){
			return new T_SGJHWARNTMP(){
				手机号 = this.手机号,
				时间 = this.时间,
				超范围类型 = this.超范围类型,
				施工ID = this.施工ID,
				PKID = this.PKID,
				类型 = this.类型,
				DEPT_CODE = this.DEPT_CODE,
			};
		}
	} 
}

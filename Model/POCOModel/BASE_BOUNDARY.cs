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
	public partial class BASE_BOUNDARY
	{
		public BASE_BOUNDARY ToPOCO(bool isPOCO = true){
			return new BASE_BOUNDARY(){
				BOUNDARY_ID = this.BOUNDARY_ID,
				MILE_START = this.MILE_START,
				MILE_END = this.MILE_END,
				SMALL_DEPT_CODE = this.SMALL_DEPT_CODE,
				BIG_DEPT_CODE = this.BIG_DEPT_CODE,
			};
		}
	} 
}
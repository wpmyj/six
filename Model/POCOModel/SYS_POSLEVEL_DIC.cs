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
	public partial class SYS_POSLEVEL_DIC
	{
		public SYS_POSLEVEL_DIC ToPOCO(bool isPOCO = true){
			return new SYS_POSLEVEL_DIC(){
				DIC_ID = this.DIC_ID,
				DIC_NAME = this.DIC_NAME,
				DIC_ICON = this.DIC_ICON,
				DIC_ORDER = this.DIC_ORDER,
				DEPT_CODE = this.DEPT_CODE,
				DIC_MEMO = this.DIC_MEMO,
				NOTE1 = this.NOTE1,
				NOTE2 = this.NOTE2,
			};
		}
	} 
}
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
	public partial class SCRIPTS_SECTION_TYPEOTHER
	{
		public SCRIPTS_SECTION_TYPEOTHER ToPOCO(bool isPOCO = true){
			return new SCRIPTS_SECTION_TYPEOTHER(){
				TYPE_ID = this.TYPE_ID,
				TYPE_NAME = this.TYPE_NAME,
				ICON = this.ICON,
				DEPT_CODE = this.DEPT_CODE,
				DEPT_NAME = this.DEPT_NAME,
				TYPE_NAME_ID = this.TYPE_NAME_ID,
				TIP_TYPE = this.TIP_TYPE,
			};
		}
	} 
}

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
	public partial class JOB_PLAN_MEMBERPHONE_MAP
	{
		public JOB_PLAN_MEMBERPHONE_MAP ToPOCO(bool isPOCO = true){
			return new JOB_PLAN_MEMBERPHONE_MAP(){
				MAP_ID = this.MAP_ID,
				PLAN_PHONE = this.PLAN_PHONE,
				MEMBER_PHONE = this.MEMBER_PHONE,
				DEPT_CODE = this.DEPT_CODE,
			};
		}
	} 
}

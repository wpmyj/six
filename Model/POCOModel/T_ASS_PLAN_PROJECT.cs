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
	public partial class T_ASS_PLAN_PROJECT
	{
		public T_ASS_PLAN_PROJECT ToPOCO(bool isPOCO = true){
			return new T_ASS_PLAN_PROJECT(){
				PKID = this.PKID,
				PLAN_ID = this.PLAN_ID,
				FLOWID = this.FLOWID,
				LOC_PKID = this.LOC_PKID,
				PROJECT_ID = this.PROJECT_ID,
			};
		}
	} 
}
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
	public partial class RULE_PROBLEM_BLAME
	{
		public RULE_PROBLEM_BLAME ToPOCO(bool isPOCO = true){
			return new RULE_PROBLEM_BLAME(){
				PKID = this.PKID,
				PROBLEM_PKID = this.PROBLEM_PKID,
				GWD_CODE = this.GWD_CODE,
				DEPT_CODE = this.DEPT_CODE,
				CJ_CODE = this.CJ_CODE,
				GQ_CODE = this.GQ_CODE,
				MEMO = this.MEMO,
			};
		}
	} 
}

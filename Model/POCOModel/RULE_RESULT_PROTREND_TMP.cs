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
	public partial class RULE_RESULT_PROTREND_TMP
	{
		public RULE_RESULT_PROTREND_TMP ToPOCO(bool isPOCO = true){
			return new RULE_RESULT_PROTREND_TMP(){
				YEARMONTH = this.YEARMONTH,
				DEPTCODE = this.DEPTCODE,
				CODE = this.CODE,
				NAME = this.NAME,
				QUANTITY = this.QUANTITY,
				TYPE = this.TYPE,
				FLAG = this.FLAG,
				PKID = this.PKID,
				USERID = this.USERID,
			};
		}
	} 
}
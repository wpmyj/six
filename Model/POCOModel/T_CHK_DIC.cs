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
	public partial class T_CHK_DIC
	{
		public T_CHK_DIC ToPOCO(bool isPOCO = true){
			return new T_CHK_DIC(){
				PKID = this.PKID,
				DIC_ID = this.DIC_ID,
				CHECK_TYPE = this.CHECK_TYPE,
				TYPE_FLAG = this.TYPE_FLAG,
				POS_FLAG = this.POS_FLAG,
				PAR_ID = this.PAR_ID,
				DIC_DESC = this.DIC_DESC,
				DIC_SAMPDESC = this.DIC_SAMPDESC,
				DIS_UNIT = this.DIS_UNIT,
				MINUS_STANDARD = this.MINUS_STANDARD,
				DIS_LEVEL = this.DIS_LEVEL,
				DIS_TYPE = this.DIS_TYPE,
			};
		}
	} 
}
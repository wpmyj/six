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
	public partial class GATE_GATEMNG_AUTHHISTORY
	{
		public GATE_GATEMNG_AUTHHISTORY ToPOCO(bool isPOCO = true){
			return new GATE_GATEMNG_AUTHHISTORY(){
				HISTORY_ID = this.HISTORY_ID,
				GATE_NO = this.GATE_NO,
				CARD_NO = this.CARD_NO,
				TIMEENABLE_FLAG = this.TIMEENABLE_FLAG,
				TIME_BEGIN = this.TIME_BEGIN,
				TIME_END = this.TIME_END,
				HISTORY_LOG = this.HISTORY_LOG,
				AUTHOPT_SECTION = this.AUTHOPT_SECTION,
				HIS_TIME = this.HIS_TIME,
				AUTH_OPT = this.AUTH_OPT,
			};
		}
	} 
}

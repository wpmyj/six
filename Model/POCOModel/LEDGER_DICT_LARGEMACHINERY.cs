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
	public partial class LEDGER_DICT_LARGEMACHINERY
	{
		public LEDGER_DICT_LARGEMACHINERY ToPOCO(bool isPOCO = true){
			return new LEDGER_DICT_LARGEMACHINERY(){
				PKID = this.PKID,
				TYPE_ID = this.TYPE_ID,
				TYPE_NAME = this.TYPE_NAME,
				PARENT_ID = this.PARENT_ID,
				DEMO = this.DEMO,
			};
		}
	} 
}

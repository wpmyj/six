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
	public partial class T_ASS_SECURITY_OFFER
	{
		public T_ASS_SECURITY_OFFER ToPOCO(bool isPOCO = true){
			return new T_ASS_SECURITY_OFFER(){
				PKID = this.PKID,
				EMP_PKID = this.EMP_PKID,
				SECURITY_DATE = this.SECURITY_DATE,
				ASS_RESULT = this.ASS_RESULT,
				ASS_SATUATION = this.ASS_SATUATION,
				DEMO = this.DEMO,
			};
		}
	} 
}

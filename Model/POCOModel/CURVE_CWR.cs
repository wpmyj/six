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
	public partial class CURVE_CWR
	{
		public CURVE_CWR ToPOCO(bool isPOCO = true){
			return new CURVE_CWR(){
				PKID = this.PKID,
				LAYINGDATE = this.LAYINGDATE,
				STRUCTUREFORM = this.STRUCTUREFORM,
				DLOCKTEMPERATURE = this.DLOCKTEMPERATURE,
				ALOCKTEMPERATURE = this.ALOCKTEMPERATURE,
				SSADLOCKTEMPERATURE = this.SSADLOCKTEMPERATURE,
				SSAALOCKTEMPERATURE = this.SSAALOCKTEMPERATURE,
				SSABLEEDINGDATE = this.SSABLEEDINGDATE,
				AWSDLOCKTEMPERATURE = this.AWSDLOCKTEMPERATURE,
				AWSALOCKTEMPERATURE = this.AWSALOCKTEMPERATURE,
				AWSBLEEDINGDATE = this.AWSBLEEDINGDATE,
				T_CRT_TM = this.T_CRT_TM,
				C_CRT_NAME = this.C_CRT_NAME,
				N_ORDER = this.N_ORDER,
				C_MEMO = this.C_MEMO,
			};
		}
	} 
}
